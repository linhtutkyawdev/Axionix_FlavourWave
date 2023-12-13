@props(['products'])

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>add</title>
</head>
<body>
    @foreach ($products as $product)
    <form action="products/{{$product->id}}/update" method="post" enctype="multipart/form-data"  style="margin: 30px 0">
        @csrf
        <div>
            <label for="">{{$product->name}} image</label>
            <input type="file" name="image" style="width: 100%">
        </div>
        <button type="submit">update</button>
    </form>
    @endforeach
</body>
</html>