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
    <div class="container mt-4">
        <div class="row">
            <div class="col-12">
                <div class="card card-chart">
                    <div class="card-header ">
                        <div class="row">
                            <div class="col-sm-6 text-left">
                                <h5 class="card-category">Total Shipments</h5>
                                <h2 class="card-title">Performance</h2>
                            </div>
                            <div class="col-sm-6">
                                <div class="btn-group btn-group-toggle float-right" data-toggle="buttons">
                                    <label class="btn btn-sm btn-primary btn-simple active" id="0">
                                        <input type="radio" name="options" checked>
                                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block"
                                            id="product-1">Product-1</span>
                                        <span class="d-block d-sm-none">
                                            <i class="tim-icons icon-single-02"></i>
                                        </span>
                                    </label>
                                    <label class="btn btn-sm btn-primary btn-simple" id="1">
                                        <input type="radio" class="d-none d-sm-none" name="options">
                                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block"
                                            id="product-2">Product-2</span>
                                        <span class="d-block d-sm-none">
                                            <i class="tim-icons icon-gift-2"></i>
                                        </span>
                                    </label>
                                    <label class="btn btn-sm btn-primary btn-simple" id="2">
                                        <input type="radio" class="d-none" name="options">
                                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block"
                                            id="product-3">Product-3</span>
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
                            <canvas id="chartBig1"></canvas>
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
                        <h3 class="card-title"><i class="tim-icons icon-bell-55 text-primary"></i> 763,215</h3>
                    </div>
                    <div class="card-body">
                        <div class="chart-area">
                            <canvas id="chartLinePurple"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card card-chart">
                    <div class="card-header">
                        <h5 class="card-category">Daily Sales</h5>
                        <h3 class="card-title"><i class="tim-icons icon-delivery-fast text-info"></i> 3,500€</h3>
                    </div>
                    <div class="card-body">
                        <div class="chart-area">
                            <canvas id="CountryChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card card-chart">
                    <div class="card-header">
                        <h5 class="card-category">Completed Tasks</h5>
                        <h3 class="card-title"><i class="tim-icons icon-send text-success"></i> 12,100K</h3>
                    </div>
                    <div class="card-body">
                        <div class="chart-area">
                            <canvas id="chartLineGreen"></canvas>
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