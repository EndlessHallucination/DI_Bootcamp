from pyowm.owm import OWM
from datetime import datetime
from dotenv import load_dotenv
import os

load_dotenv()

api_key = os.getenv('API_KEY')
owm = OWM(api_key)

weather_mgr = owm.weather_manager()
geo_mgr = owm.geocoding_manager()
air_mgr = owm.airpollution_manager()

# --- Geocoding ---
locations = geo_mgr.geocode("Paris", "FR")
location = locations[0]

lat = location.lat
lon = location.lon

observation = weather_mgr.weather_at_place("Paris,FR")
weather = observation.weather

temp = weather.temperature("celsius")["temp"]
wind = weather.wind()["speed"]

sunrise = datetime.fromtimestamp(weather.sunrise_time())
sunset = datetime.fromtimestamp(weather.sunset_time())

air_quality = air_mgr.air_quality_at_coords(lat, lon)

print("====== WEATHER REPORT ======")
print(f"City: Paris")
print(f"Temperature: {temp}°C")
print(f"Wind Speed: {wind} m/s")
print(f"Sunrise: {sunrise}")
print(f"Sunset: {sunset}")

print("\n====== AIR QUALITY ======")
print(air_quality)