<?php

namespace App\Http\Controllers;

use App\Models\Preorder;
use App\Models\Warehouse;
use Illuminate\Http\Request;

class StatusController extends Controller
{
    // change status
    public function acceptOrder($id, Request $request){

        $accept = $this->acceptOrderStatus();
        Preorder::where('order_id', $id)->update($accept);
        $preorder = Warehouse::select('warehouse.*', 'warehouse.product_id as warehouse_p_id')->leftJoin('preorder_detail', 'warehouse.product_id', 'preorder_detail.product_id')->where('preorder_detail.order_id', $id)->first();
        foreach($preorder as $p){
            $product_id = $p->product_id;
            $sales_issue = $p->sales_issue;

            $product = Warehouse::where('product_id', $product_id)->get()[0];

            $sales_issue = $this->inputSalesQty($product->product_id, $sales_issue);
            Warehouse::where('product_id', $product->$product_id)->update($sales_issue);

            $aval = $this->subtractSales($product->$product_id, $sales_issue);
            Warehouse::where('product_id', $product->$product_id)->update($aval);
        }

        return view('warehouse')->with(['message' => 'The order has been accepted.']);
    }

    public function cancelOrder($id, Request $request){

        $cancel = $this->cancelOrderStatus();
        Preorder::where('order_id', $id)->update($cancel);

        $reason = $this->inputCancelReason($request);
        Preorder::where('order_id', $id)->update($reason);
        return back()->with(['message' => 'The order has been cancelled.']);
    }

    // update sales issue
    private function inputSalesQty($product_id, $sales_issue){
        $total = Warehouse::where('product_id', $product_id)->select('sales_issue')->get();
        $total += $sales_issue;
        return ['sales_issue'=>$total];
    }

    // update availability
    private function subtractSales($product_id, $sales_issue){
        $total = Warehouse::where('product_id', $product_id)->select('availability')->get();
        $total -= $sales_issue;
        return ['availability'=>$total];
    }

    // accept status
    private function acceptOrderStatus(){
        return [ 'status' => 'accepted' ];
    }

    // cancel status
    private function cancelOrderStatus(){
        return [ 'status' => 'cancelled' ];
    }

    // add cancel reason
    private function inputCancelReason($request){
        return ['cancel_reason'=>$request->cancel_reason];
    }
}
