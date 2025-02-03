<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarjeta Web con Enlaces</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .card {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
            width: 300px;
            text-align: center;
        }
        .card img {
            border-radius: 50%;
            width: 100px;
            height: 100px;
            margin-bottom: 15px;
        }
        .card h1 {
            font-size: 24px;
            margin: 10px 0;
        }
        .card p {
            font-size: 14px;
            color: #666;
            margin: 10px 0;
        }
        .card .links {
            margin-top: 20px;
        }
        .card .links a {
            display: inline-block;
            margin: 0 10px;
            color: #0073e6;
            text-decoration: none;
            font-size: 16px;
        }
        .card .links a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="card">
        <!-- Imagen de perfil -->
        <img src="https://www.instagram.com/ismaelmendoza2121?igsh=MXI2MGwwMXVwazJhbA==" alt="Foto de perfil">
        
        <!-- Nombre -->
        <h1>Ismael Mendoza</h1>
        
        <!-- Descripción -->
        <p>Enfermero Profesional y Desarrollador web Amateur apasionado por crear soluciones innovadoras y eficientes.</p>
        
        <!-- Enlaces de redireccionamiento -->
        <div class="links">
            <a href=" https://wa.me/<+58 412-699-9495>" target="_blank">WhatsApp</a>
            <a href="https://www.instagram.com/ismaelmendoza2121?igsh=MXI2MGwwMXVwazJhbA==" target="_blank">Instagram</a>
            <a href="https://x.com/ismaelymc?t=1nX6YdAAQKS6TjQ6Ht2SEg&s=09" target="_blank">Twitter</a>
        </div>
    </div>
</body>
</html>
