from flask import Flask
from flasgger import Swagger

def create_app():
    app = Flask(__name__)

    # Inicialize o Swagger
    swagger = Swagger(app)

    # Importar e registrar o blueprint
    from .routes import main
    app.register_blueprint(main)

    return app