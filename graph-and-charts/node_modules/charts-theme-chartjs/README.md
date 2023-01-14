## charts-theme-chartjs ![npm](https://badge.fury.io/js/charts-theme-chartjs.png)

a [chartjs](http://www.chartjs.org/) solution of Charts.

![screenshot](http://ww2.sinaimg.cn/large/61ff0de3gw1eed5ne2vdkj20nh0jwjte.jpg)

### Installation
````
$ npm install charts-theme-chartjs
````

### Example

Make sure your Charts server is running and visit:

#### Embed Mode

Embed a Line chart (500x350)
```
http://localhost:3001/chartjs/500x350/{labels:['M1','M2','M3','M4','M5','M6','M7'],datasets:[{fillColor:'rgba(220,220,220,0.5)',strokeColor:'rgba(220,220,220,1)',pointColor:'rgba(220,220,220,1)',pointStrokeColor:'rgba(255,255,255,1)',data:[65,59,90,81,56,55,40]},{fillColor:'rgba(220,220,220,0.5)',strokeColor:'rgba(220,220,220,1)',pointColor:'rgba(220,220,220,1)',pointStrokeColor:'rgba(255,255,255,1)',data:[28,48,40,19,96,27,100]}]}?type=Line
```

Embed a Bar chart (500x350)
```
http://localhost:3001/chartjs/500x350/{labels:['M1','M2','M3','M4','M5','M6','M7'],datasets:[{fillColor:'rgba(220,220,220,0.5)',strokeColor:'rgba(220,220,220,1)',pointColor:'rgba(220,220,220,1)',pointStrokeColor:'rgba(255,255,255,1)',data:[65,59,90,81,56,55,40]},{fillColor:'rgba(151,187,205,0.5)',strokeColor:'rgba(220,220,220,1)',pointColor:'rgba(220,220,220,1)',pointStrokeColor:'rgba(255,255,255,1)',data:[28,48,40,19,96,27,100]}]}?type=Bar
```

Embed a Doughnut chart (350x350)
```
http://localhost:3001/chartjs/350x350/[{value:30,color:'rgba(123,162,63,1)'},{value:120,color:'rgba(145,180,147,0.8)'},{value:85,color:'rgba(129,199,212,1)'}]?type=Doughnut&delay=2000
```

#### Debug Mode

just add `?preview=true` to embed link.

**TIPS:** `1x1` means auto-width and auto-height

### Contributing
- Fork this repo
- Clone your repo
- Install dependencies
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Open a pull request, and enjoy <3

### MIT license
Copyright (c) 2014 turing &lt;o.u.turing@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
![docor](https://cdn1.iconfinder.com/data/icons/windows8_icons_iconpharm/26/doctor.png)
built upon love by [docor](https://github.com/turingou/docor.git) v0.1.3