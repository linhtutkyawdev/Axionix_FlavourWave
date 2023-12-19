<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\PreorderRequest;
use App\Models\Preorder;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
    // get all orders' list from the customer
    public function getPreorders($id)
    {
        $perPage = 12;
        $pageCount = ceil(count(Preorder::all()) / $perPage);
        $orders = Preorder::where('customer_id', $id)->latest()->paginate(12);

        return response()->json([
            'orders' => $orders,
            'pageCount' => $pageCount,
        ]);
    }

    // create order
    public function createPreorder(PreorderRequest $request)
    {
        $pId = request('product_id');
        if ($pId) {
            $cleanData = $request->validated();

            $keysForPreorder = [
                'customer_id',
                'order_id',
                'location',
                'order_quantity',
                'is_urgent',
                'capacity',
                'truck_number',
                'driver_nrc',
                'date',
                'delivered_quantity'
            ];

            $preorderData = [];

            foreach ($keysForPreorder as $key) {
                if (isset($cleanData[$key])) {
                    $preorderData[$key] = $cleanData[$key];
                }
            }

            Preorder::create($preorderData);
            foreach ($pId as $id) {
                Product::find($id)->orders()->attach($request->order_id, [
                    'product_id' => $id,
                    'order_quantity' => $request->order_quantity,
                    'total_price' => $request->total_price,
                ]);
            }
            return response()->json([
                'message' => 'create preorder is successful.'
            ]);
        } else {
            return response()->json(['product_id' => 'products field is required']);
        }
    }


    // edit page order
    public function getPreOrder($id)
    {
        $preorder = Preorder::where('order_id', $id)->get();
        return response()->json([
            'preorder' => $preorder,
        ]);
    }
    public function getPreordersCountFor12Months()
    {
        return response()->json([
            [
                'product_name' => 'Burmese Bliss',
                'monthly_preorder_count' => [100, 200, 900, 400, 600, 500, 7000, 4900, 5900, 4000, 300, 1800],
            ],
            [
                'product_name' => 'Golden Sunshine Tea',
                'monthly_preorder_count' => [4900, 5900, 4000, 300, 1800, 100, 200, 900, 400, 600, 500, 7000]
            ],
            [
                'product_name' => 'Mango Tango Delight',
                'monthly_preorder_count' => [100, 200, 900, 4900, 400, 600, 500, 7000, 5900, 4000, 300, 1800]
            ],
            [
                'product_name' => 'Rangoon Rosewater Elixir',
                'monthly_preorder_count' => [100, 200, 900, 400, 5900, 4000, 300, 7000, 4900, 1800, 600, 500,]
            ],
            [
                'product_name' => 'Emerald Green Chai',
                'monthly_preorder_count' => [500, 7000, 4900, 5900, 1800, 400, 600, 4000, 100, 200, 900, 300]
            ],
        ]);
    }

    // edit order list
    public function update(Preorder $preorder, PreorderRequest $request)
    {
        $cleandata = $request->validated();
        $preorder->update($cleandata);
        return response()->json([
            'message' => 'Your order has been updated successfully.'
        ]);

    }

    // input updated details
    private function updateOrderDetails($request)
    {
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
    private function inputOrder($request, $random)
    {
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
