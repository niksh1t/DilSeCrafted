from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/products')
def products():
    return render_template('products.html')

@app.route('/static/<path:path>')
def serve_static(path):
    """
    Serves static files (CSS, JS, images) from the static/ directory.
    """
    return send_from_directory('static', path)

if __name__ == '__main__':
    app.run(debug=True)
