<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    // get all orders' list from the customer
    public function getAllOrders(Request $request){
        $perPage = 12;
        $pageCount = ceil(count(Preorder::all())/$perPage);
        $id = $request->id;
        $orders = Preorder::where('customer_id', $id)->latest()->paginate(12);

        return response()->json([
            'orders' => $orders,
            'pageCount' => $pageCount,
        ]);
    }

    // create order
    public function createOrder(Request $request){
        $data = $this->inputOrder($request);
        Preorder::create($data);
    }


    // edit page order
    public function editOrderPage(Request $request){
        $order = Preorder::where('order_id', $request->order_id)->first();
        return response()->json([
            'order' => $order,
        ]);
    }

    // edit order list
    public function editOrder(Request $request){
        $data = $this->updateOrderDetails($request);
        Preorder::where('order_id', $request->order_id)->update($data);
        return response()->json([
            'message' => 'Your order has been updated successfully.'
        ]);

    }

    // input updated details
    private function updateOrderDetails($request){
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
