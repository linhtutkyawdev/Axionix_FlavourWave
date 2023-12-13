<?php

namespace App\Http\Controllers\Api;

use App\Models\Preorder;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
    // get all orders' list from the customer
    public function getAllOrders($id){
        $perPage = 12;
        $pageCount = ceil(count(Preorder::all())/$perPage);
        $orders = Preorder::where('customer_id', $id)->paginate(10);

        return response()->json([
            'orders' => $orders,
            'pageCount' => $pageCount,
        ]);
    }

    // create order
    public function createOrder(Request $request){
        $random = rand(0, 999999);
        $data = $this->inputOrder($request, $random);
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
    private function inputOrder($request, $random){
        return [
            'customer_id' => $request->customer_id,
            'order_id' => $random,
            'location' => $request->location,
            'is_urgent' => $request->is_urgent,
            'truck_number' => $request->truck_number,
            'date' => $request->date,
            'capacity' => $request->capacity,
            'driver_nrc' => $request->driver_nrc,
            'status' => 'pending',
            'delivered_quantity' => $request->delivered_quantity,
        ];
    }
}
