<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    // get all orders
    public function getAllOrders(){
        $perPage = 8;
        $pageCount = ceil(count(Preorder::all())/$perPage);
        $orders = Preorder::paginate(8);
        return response()->json([
            'orders' => $orders,
            'pageCount' => $pageCount,
        ]);
    }

    // get orders from each customer
    public function getEachOrder(Request $request){
        $id = $request->id;
        $eachOrders = Preorder::where('customer_id', $id)->latest();
        return response()->json([
            'eachOrders' => $eachOrders,
        ]);
    }

    // create order
    public function createOrder(Request $request){
        $data = $this->inputOrder($request);
        Preorder::create($data);
    }

    // input orders
    private function inputOrder($request){
        return [
            'customer_id' => $request->customer_id,
            'order_id' => $request->order_id,
            'location' => $request->location,
            'is_urgent' => $request->is_urgent,
            'truck_number' => $request->truck_number,
            'data' => $request->data,
            'capacity' => $request->capacity,
            'driver_nrc' => $request->driver_nrc,
            'status' => 'pending',
            'delivered_quantity' => $request->delivered_quantity,
        ];
    }
}
