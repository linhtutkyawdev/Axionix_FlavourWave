<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;

class CustomerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return TRUE;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'customer_id' => ['required',Rule::unique('customers','customer_id')],
            'name' => 'required',
            'email' => ['required',Rule::unique('customers','email')],
            'image_url' => ['required'],
            'password' => 'required',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        // Extract the error messages from the validator
        $errors = $validator->errors();

        // Throw an exception with the error messages
        throw new HttpResponseException(response()->json(['errors' => $errors], 422));
    }
}
