import datetime

from babel.dates import format_date, format_datetime
from flask import Flask, render_template, url_for
from pytz import timezone, utc

app = Flask(__name__)
app.config['SERVER_NAME'] = 'isnowthetime-guncontrol.herokuapp.com'
app.config['PREFERRED_URL_SCHEME'] = 'https'

los_angeles_tz = timezone('America/Los_Angeles')

@app.route("/")
def hello():
    utc_dt = datetime.datetime.now(utc)
    timestamp = utc_dt.astimezone(los_angeles_tz)
    return render_template(
        'hello.html',
        date=format_date(timestamp.date(), 'L/d/YY'),
        time=format_datetime(timestamp, 'h:mm:ss a z'),
        og_image_url=url_for('static', filename='images/preview.png', _external=True),
        SERVER_NAME=app.config['SERVER_NAME'],
    )
