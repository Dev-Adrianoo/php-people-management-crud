<?php 
    $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

    $path = rtrim($path, '/');


    if($path === '/api/pessoas') {
        if(file_exists(__DIR__.'/api/people.php')) {
            require __DIR__ . '/api/people.php';
            return true;
        } else {
            http_response_code(500);
            echo json_encode(["message" => "Erro interno: Arquivo da API não encontrado."]);
        return true;
        }
    }


    return false;
?>