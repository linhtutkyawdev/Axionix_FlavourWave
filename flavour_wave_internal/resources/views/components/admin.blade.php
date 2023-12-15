<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800" rel="stylesheet" />
    <!-- Icons -->
    <link href="{{ asset('black') }}/css/nucleo-icons.css" rel="stylesheet" />
    <!-- CSS -->
    <link href="{{ asset('black') }}/css/black-dashboard.css?v=1.0.0" rel="stylesheet" />

</head>

<body>
    ADMIN
    <div class="container mt-4">
        <div class="row">
            <div class="col-12">
                <div class="card card-chart">
                    <div class="card-header ">
                        <div class="row">
                            <div class="col-sm-6 text-left">
                                <h5 class="card-category">Total Staff Count</h5>
                                <h2 class="card-title">Growth of the company</h2>
                            </div>
                            <div class="col-sm-6">
                                <div class="btn-group btn-group-toggle float-right" data-toggle="buttons">
                                    <label class="btn btn-sm btn-primary btn-simple active" id="0">
                                        <input type="radio" name="options" checked>
                                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block"
                                            id="admin_dept">Admin</span>
                                        <span class="d-block d-sm-none">
                                            <i class="tim-icons icon-single-02"></i>
                                        </span>
                                    </label>
                                    <label class="btn btn-sm btn-primary btn-simple" id="1">
                                        <input type="radio" class="d-none d-sm-none" name="options">
                                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block"
                                            id="factory_dept">Factory</span>
                                        <span class="d-block d-sm-none">
                                            <i class="tim-icons icon-gift-2"></i>
                                        </span>
                                    </label>
                                    <label class="btn btn-sm btn-primary btn-simple" id="2">
                                        <input type="radio" class="d-none" name="options">
                                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block"
                                            id="logistic_dept">Logistic</span>
                                        <span class="d-block d-sm-none">
                                            <i class="tim-icons icon-tap-02"></i>
                                        </span>
                                    </label>
                                    <label id="sale_dept" class="btn btn-sm btn-primary btn-simple" id="3">
                                        <input type="radio" class="d-none" name="options">
                                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Sale</span>
                                        <span class="d-block d-sm-none">
                                            <i class="tim-icons icon-tap-02"></i>
                                        </span>
                                    </label>
                                    <label id="warehouse_dept" class="btn btn-sm btn-primary btn-simple" id="4">
                                        <input type="radio" class="d-none" name="options">
                                        <span
                                            class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Warehouse</span>
                                        <span class="d-block d-sm-none">
                                            <i class="tim-icons icon-tap-02"></i>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="chart-area">
                            <canvas id="staff_chart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <div class="card card-chart">
                    <div class="card-header">
                        <h5 class="card-category">Total Shipments</h5>
                        <h3 class="card-title"><i class="tim-icons icon-bell-55 text-primary"></i>
                            <span id="deliver-count">...</span>
                        </h3>
                    </div>
                    <div class="card-body">
                        <div class="chart-area">
                            <canvas id="shipment_chart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card card-chart">
                    <div class="card-header">
                        <h5 class="card-category">Daily Sales</h5>
                        <h3 class="card-title"><i class="tim-icons icon-delivery-fast text-info"></i>
                            <span id="daily-sale">...</span>
                        </h3>
                    </div>
                    <div class="card-body">
                        <div class="chart-area">
                            <canvas id="daily_sale_chart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card card-chart">
                    drop down to choose product
                    <div class="card-header">
                        <h5 class="card-category">In Stock</h5>
                        <h3 class="card-title"><i class="tim-icons icon-send text-success"></i> 12,100 boxes</h3>
                    </div>
                    <div class="card-body">
                        <div class="chart-area">
                            <canvas id="stock_chart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Jquery -->
    <script src="{{ asset('black') }}/js/core/jquery.min.js"></script>

    <!-- Bootstrap -->
    <script src="{{ asset('black') }}/js/core/bootstrap.min.js"></script>

    <!-- Chart JS -->
    <script src="{{ asset('black') }}/js/plugins/chartjs.min.js"></script>

    <!-- Theme -->
    <script src="{{ asset('black') }}/js/theme.js"></script>

    <!-- Axios -->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

    <script>
        $(document).ready(function () {
            initDashboardPageCharts();
        });
    </script>
</body>

</html>