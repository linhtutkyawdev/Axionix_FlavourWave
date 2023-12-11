<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OrderDetailsController extends Controller
{
    // create order details
    public function createOrderDetails(Request $request){
        $data = $this->inputOrderDetails($request);
        Preorder_Details::create($data);
    }

    // orders' details from each customer
    public function eachOrderDetails(Request $request){
        $order = Preorder_Details::where('order_id', $request->order_id)->first();
        return response()->json([
            'order' => $order,
        ]);
    }

    // edit order details
    public function editOrderDetails($id, Request $request){
        $data = $this->inputEditOrderDetails($request);
        Preorder_Details::where('order_id', $id)->update($data);
        return response()->json([
            'order_status' => 'Your order details have been updated.'
        ]);
    }

    // input order details
    private function inputOrderDetails($request){
        return [
            'order_id' => $request->order_id,
            'product_id' => $request->product_id,
            'order_quantity' => $request->order_quantity,
            'total_price' => $request->total_price,
            'preorder_date' => $request->preorder_data,
        ];
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
