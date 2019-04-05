import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.css']
})
export class BootstrapComponent implements OnInit {
  response: HighlightResult;
  cssClippathfile = `
  clippath polygon
  div{
  width: 100%;
  height: 200px;
  background-image:linear-gradient(to right bottom, #7ed56fcc, #28b485d1), url(https://www.sonyrumors.co/wp-content/uploads/2018/02/sony-a7iii-sample-image-4.jpg);
  background-size: cover;
  background-position: center;
  clip-path: polygon(0 0, 100% 0, 100% 74%, 0 100%);
  clip-path: circle(38%);
  clip-path: ellipse(130px 140px at 10% 20%);
}
  `;

csstextgradientfile =`
div{
  font-size: 3.5rem;
	font-weight: 700;
	text-transform: uppercase;
  background-image: linear-gradient(to right, $lightgreen, $darkgreen);
  or 
  background-image: linear-gradient(to top, $lightgreen, $darkgreen);
  or
  background-image: linear-gradient(to bottom, $lightgreen, $darkgreen);
	display: inline-block;
	-webkit-background-clip:text;
	color: transparent;
}
`;


  constructor() { }

  ngOnInit() {
  }

}
