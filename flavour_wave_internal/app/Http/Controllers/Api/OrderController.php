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
    public function getPreorders($id){
        $perPage = 12;
        $pageCount = ceil(count(Preorder::all())/$perPage);
        $orders = Preorder::where('customer_id', $id)->latest()->paginate(12);

        return response()->json([
            'orders' => $orders,
            'pageCount' => $pageCount,
        ]);
    }

    // create order
    public function createPreorder(PreorderRequest $request){
        $pId = request('product_id');
        if($pId){
            $preorderCleanData = $request->validated();
            Preorder::create($preorderCleanData);
            foreach($pId as $id){
                Product::find($id)->orders()->attach($request->order_id);
            }
            return response()->json([
                'message' => 'create preorder is successful.'
            ]);
        }else{
            return response()->json(['product_id'=>'products field is required']);
        }
    }


    // edit page order
    public function getPreOrder($id){
        $preorder = Preorder::where('order_id', $id)->get();
        return response()->json([
            'preorder' => $preorder,
        ]);
    }

    // edit order list
    public function update(Preorder $preorder,PreorderRequest $request){
        $cleandata = $request->validated();
        $preorder->update($cleandata);
        return response()->json([
            'message' => 'Your order has been updated successfully.'
        ]);
    }
}
