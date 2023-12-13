<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;

class WarehouseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'product_id' => ['required',Rule::exists('products','id')],
            'opening_balance' => 'required',
            'sales_issue' => 'required',
            'received' => 'required',
            'sales_return' => 'required',
            'damage' => 'required',
            'closing_balance' => 'required',
        ];
    }

    public function failedValidation(Validator $validator){
        $errors = $validator->errors();
        throw new HttpResponseException(response()->json($errors));
    }
}
