import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-slimphpapi',
  templateUrl: './slimphpapi.component.html',
  styleUrls: ['./slimphpapi.component.css']
})
export class SlimphpapiComponent implements OnInit {
  response: HighlightResult;

  slimfrmfolderstr = `
  ├── project folder
  │   └── src
  │         └── api folder
  │                 └── All api files.php [get,post,put,delete]
  │         └── dependencies.php
  │         └── middleware.php
  │         └── routes.php
  │         └── settings.php
  │   └── public
  │         └── index.php
  │         └── .htaccess
  │   └── templates
  │         └── index.phtml
  │   └── tests
  │   └── uploads
  │   └── vendor
  | composer.json`;

  composercommand = `
  Open Terminal or CMD
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '93b54496392c062774670ac18b134c3b3a95e5a5e5c8f1a9f115f203b75bf9a129d5daa8ba6a13e2cc8a1da0806388a8') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
  `;

  sliminstall = `
  run slim install composer
  php composer.phar require slim/slim "^3.0"
  `;

  slimstartrnd = `
  go to
  ├── project folder
  │   └── public
  │         └── index.php

  Install pakages cammand line
  composer require slim/php-view
  composer require monolog/monolog
  composer require tuupola/cors-middleware

  <?php
require 'vendor/autoload.php';
  
run project view browser terminal cammand
php -S localhost:8080
`;
slimcomoserjson = `
"scripts": {
  "start": "php -S 0.0.0.0:8080 -t public public/index.php",
  "test": "phpunit"
}
`;
  constructor() { }

  ngOnInit() {
  }




}
