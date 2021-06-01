from flask import Flask, render_template
app = Flask('app')


@app.route('/')
def sakums():
  return render_template("sakumlapa.html")


@app.route('/klients')
def klienta():
  return render_template("klienta.html")

@app.route('/admin')
def admin():
  return render_template("admin copy.html")

app.run(host='0.0.0.0', port=8080)