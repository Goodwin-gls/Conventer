<template>
  <div class="circular-loader">
    <div class="circularG circularG_1"></div>
    <div class="circularG circularG_2"></div>
    <div class="circularG circularG_3"></div>
    <div class="circularG circularG_4"></div>
    <div class="circularG circularG_5"></div>
    <div class="circularG circularG_6"></div>
    <div class="circularG circularG_7"></div>
    <div class="circularG circularG_8"></div>
  </div>
</template>
<style>
.circular-loader{
	position:relative;
	width:33px;
	height:33px;
	margin: auto;
}

.circularG{
	position:absolute;
	background-color:rgb(255,255,255);
	width:8px;
	height:8px;
	border-radius:5px;
		-o-border-radius:5px;
		-ms-border-radius:5px;
		-webkit-border-radius:5px;
		-moz-border-radius:5px;
	animation-name:bounce_circularG;
		-o-animation-name:bounce_circularG;
		-ms-animation-name:bounce_circularG;
		-webkit-animation-name:bounce_circularG;
		-moz-animation-name:bounce_circularG;
	animation-duration:0.578s;
		-o-animation-duration:0.578s;
		-ms-animation-duration:0.578s;
		-webkit-animation-duration:0.578s;
		-moz-animation-duration:0.578s;
	animation-iteration-count:infinite;
		-o-animation-iteration-count:infinite;
		-ms-animation-iteration-count:infinite;
		-webkit-animation-iteration-count:infinite;
		-moz-animation-iteration-count:infinite;
	animation-direction:normal;
		-o-animation-direction:normal;
		-ms-animation-direction:normal;
		-webkit-animation-direction:normal;
		-moz-animation-direction:normal;
}

.circularG_1{
	left:0;
	top:13px;
	animation-delay:0.218s;
		-o-animation-delay:0.218s;
		-ms-animation-delay:0.218s;
		-webkit-animation-delay:0.218s;
		-moz-animation-delay:0.218s;
}

.circularG_2{
	left:3px;
	top:3px;
	animation-delay:0.284s;
		-o-animation-delay:0.284s;
		-ms-animation-delay:0.284s;
		-webkit-animation-delay:0.284s;
		-moz-animation-delay:0.284s;
}

.circularG_3{
	top:0;
	left:13px;
	animation-delay:0.36s;
		-o-animation-delay:0.36s;
		-ms-animation-delay:0.36s;
		-webkit-animation-delay:0.36s;
		-moz-animation-delay:0.36s;
}

.circularG_4{
	right:3px;
	top:3px;
	animation-delay:0.436s;
		-o-animation-delay:0.436s;
		-ms-animation-delay:0.436s;
		-webkit-animation-delay:0.436s;
		-moz-animation-delay:0.436s;
}

.circularG_5{
	right:0;
	top:13px;
	animation-delay:0.502s;
		-o-animation-delay:0.502s;
		-ms-animation-delay:0.502s;
		-webkit-animation-delay:0.502s;
		-moz-animation-delay:0.502s;
}

.circularG_6{
	right:3px;
	bottom:3px;
	animation-delay:0.578s;
		-o-animation-delay:0.578s;
		-ms-animation-delay:0.578s;
		-webkit-animation-delay:0.578s;
		-moz-animation-delay:0.578s;
}

.circularG_7{
	left:13px;
	bottom:0;
	animation-delay:0.644s;
		-o-animation-delay:0.644s;
		-ms-animation-delay:0.644s;
		-webkit-animation-delay:0.644s;
		-moz-animation-delay:0.644s;
}

.circularG_8{
	left:3px;
	bottom:3px;
	animation-delay:0.72s;
		-o-animation-delay:0.72s;
		-ms-animation-delay:0.72s;
		-webkit-animation-delay:0.72s;
		-moz-animation-delay:0.72s;
}



@keyframes bounce_circularG{
	0%{
		transform:scale(1);
	}

	100%{
		transform:scale(.3);
	}
}

@-o-keyframes bounce_circularG{
	0%{
		-o-transform:scale(1);
	}

	100%{
		-o-transform:scale(.3);
	}
}

@-ms-keyframes bounce_circularG{
	0%{
		-ms-transform:scale(1);
	}

	100%{
		-ms-transform:scale(.3);
	}
}

@-webkit-keyframes bounce_circularG{
	0%{
		-webkit-transform:scale(1);
	}

	100%{
		-webkit-transform:scale(.3);
	}
}

@-moz-keyframes bounce_circularG{
	0%{
		-moz-transform:scale(1);
	}

	100%{
		-moz-transform:scale(.3);
	}
}
</style>