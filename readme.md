To run a live server first install a version of python.

Open your terminal and typ:
  ifconfig

this command will give you a list of info

look for your ip. inet xxx.xxx.x.xx netmask (the xxx.xxx.x.xx)

Then in the terminal run:
  python -m SimpleHTTPServer

it will say
  "Serving HTTP on 0.0.0.0 port 8000 ..."
to visit the pages go to your browser and type your ip+port (xxx.xxx.x.xx:8000)
