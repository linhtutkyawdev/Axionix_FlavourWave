<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Preorder;

class OrderDetailsController extends Controller
{
    // create order details
    public function createOrderDetails(Request $request){
        $this->inputOrderDetails($request);
        return response()->json([
            'message' => 'Your order has been placed, please wait for confirmation.'
        ]);
    }

    // orders' details from each customer
    public function eachOrderDetails(Request $request){
        $order = Preorder_detail::where('order_id', $request->order_id)->first();
        return response()->json([
            'order' => $order,
        ]);
    }

    // edit order details
    public function editOrderDetails($id, Request $request){
        $data = $this->inputEditOrderDetails($request);
        Preorder_detail::where('order_id', $id)->update($data);
        return response()->json([
            'order_status' => 'Your order details have been updated.'
        ]);
    }

    // input order details
    private function inputOrderDetails($request){
        foreach($request->all() as $item){
            Preorder_detail::create([
                'order_id' => $item->order_id,
                'product_id' => $item->product_id,
                'order_quantity' => $item->order_quantity,
                'total_price' => $item->total_price,
                'preorder_date' => $item->preorder_date,
                'created_at' => Carbon::now(),
            ]);
        }

    }

    // edit order details
    private function inputEditOrderDetails($request){
        return [
            'product_id' => $request->product_id,
            'order_quantity' => $request->order_quantity,
            'total_price' => $request->total_price,
            'preorder_date' => $request->preorder_data,
        ];
    }
}
