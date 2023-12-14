<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PreorderRequest;
use App\Models\Preorder;
use App\Models\Product;
use Illuminate\Http\Request;

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
            $preorderCleanData = $request->validated();
            Preorder::create($preorderCleanData);
            foreach ($pId as $id) {
                Product::find($id)->orders()->attach($request->order_id);
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
                'product_name' => 'Product-2',
                'monthly_preorder_count' => [4900, 5900, 4000, 300, 1800, 100, 200, 900, 400, 600, 500, 7000]
            ],
            [
                'product_name' => 'Product-3',
                'monthly_preorder_count' => [100, 200, 900, 4900, 400, 600, 500, 7000, 5900, 4000, 300, 1800]
            ],
            [
                'product_name' => 'Product-4',
                'monthly_preorder_count' => [100, 200, 900, 400, 5900, 4000, 300, 7000, 4900, 1800, 600, 500,]
            ],
            [
                'product_name' => 'Product-5',
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
}
