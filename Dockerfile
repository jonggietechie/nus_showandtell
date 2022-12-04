FROM ubuntu:18.04
RUN apt-get -y update && apt-get -y install --no-install-recommends apache2 \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*
COPY index.html style.css scripts.js arithmetics.js /var/www/html/
EXPOSE 8080
CMD ["/usr/sbin/apache2ctl", "-DFOREGROUND"]