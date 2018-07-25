import $ from 'jquery';

import './base.less';

function component() {
    return $("<div>我是jQ创建的元素</div>");
  }
  
//   document.body.appendChild(component());
$('body').append(component());