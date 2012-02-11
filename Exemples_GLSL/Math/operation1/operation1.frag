
varying vec2 texcoord0;

uniform vec4 inscale;
uniform vec4 inoffset;
uniform vec4 outscale;
uniform vec4 outoffset;
uniform int op;

uniform sampler2DRect texture;

void main( void )
{
	if (op==1)
{
	vec4 v0 = texture2DRect(texture, texcoord0);

	v0 = (v0*inscale)+inoffset;	
	vec4 result = abs(v0);
	gl_FragColor = (result*outscale)+outoffset;
}
	else if(op==2)
{
	vec4 v0 = texture2DRect(texture, texcoord0);
	
	v0 = (v0*inscale)+inoffset;	
	vec4 result = acos(v0);
	gl_FragColor = (result*outscale)+outoffset;
}
	else if(op==3)
{
	vec4 v0 = texture2DRect(texture, texcoord0);
	vec4 e = vec4(2.71828182846);

	v0 = (v0*inscale)+inoffset;	
	vec4 result = log2(v0+pow(v0*v0-1.,vec4(0.5)))/log2(e);
	gl_FragColor = (result*outscale)+outoffset;
}
	else if(op==4)
{
	vec4 v0 = texture2DRect(texture, texcoord0);
	
	v0 = (v0*inscale)+inoffset;	
	vec4 result = asin(v0);
	gl_FragColor = (result*outscale)+outoffset;
}
	else if(op==5)
{
	vec4 v0 = texture2DRect(texture, texcoord0);
	vec4 e = vec4(2.71828182846);
	v0 = (v0*inscale)+inoffset;	
	
	vec4 result = log2(v0+pow(v0*v0+1.,vec4(0.5)))/log2(e);
	gl_FragColor = (result*outscale)+outoffset;
}
	else if(op==6)
{
	vec4 v0 = texture2DRect(texture, texcoord0);
	
	v0 = (v0*inscale)+inoffset;	
	vec4 result = atan(v0);
	gl_FragColor = (result*outscale)+outoffset;
}
	else if(op==7)
{
	vec4 v0 = texture2DRect(texture, texcoord0);
	vec4 e = vec4(2.71828182846);
	v0 = (v0*inscale)+inoffset;	
	
	vec4 result = (log2((1.+v0)/(1.-v0))/log2(e))*0.5;
	gl_FragColor = (result*outscale)+outoffset;
}
	else if(op==8)
{
	vec4 v0 = texture2DRect(texture, texcoord0);
	
	v0 = (v0*inscale)+inoffset;	
	vec4 result = ceil(v0);
	gl_FragColor = (result*outscale)+outoffset;
}
	else if(op==9)
{
	vec4 v0 = texture2DRect(texture, texcoord0);
	
	v0 = (v0*inscale)+inoffset;	
	vec4 result = cos(v0);
	gl_FragColor = (result*outscale)+outoffset;
}
	else if(op==10)
{
	vec4 v0 = texture2DRect(texture, texcoord0);
	vec4 e = vec4(2.71828182846);

	v0 = (v0*inscale)+inoffset;	
	vec4 result = (pow(e,v0) + pow(e,-v0))/vec4(2.);
	gl_FragColor = (result*outscale)+outoffset;
}
	else if(op==11)
{
	vec4 v0 = texture2DRect(texture, texcoord0);
	vec4 e = vec4(2.71828182846);
	v0 = (v0*inscale)+inoffset;	
	
	vec4 result = pow(e,v0);
	gl_FragColor = (result*outscale)+outoffset;
}
	else if(op==12)
{
	vec4 v0 = texture2DRect(texture, texcoord0);
	
	v0 = (v0*inscale)+inoffset;	
	vec4 result = exp2(v0);
	gl_FragColor = (result*outscale)+outoffset;
}
	else if(op==13)
{
	vec4 v0 = texture2DRect(texture, texcoord0);
	
	v0 = (v0*inscale)+inoffset;	
	vec4 result = floor(v0);
	gl_FragColor = (result*outscale)+outoffset;
}
	else if(op==14)
{
	vec4 v0 = texture2DRect(texture, texcoord0);
	
	v0 = (v0*inscale)+inoffset;	
	vec4 result = fract(v0);
	gl_FragColor = (result*outscale)+outoffset;
}
/*
	else if(op==15)
{
	vec4 v0 = texture2DRect(texture, texcoord0);
	
	v0 = (v0*inscale)+inoffset;	
	vec4 result = invsqrt(v0);
	gl_FragColor = (result*outscale)+outoffset;
}
*/
	else if(op==16)
{
	vec4 v0 = texture2DRect(texture, texcoord0);
	vec4 e = vec4(2.71828182846);

	v0 = (v0*inscale)+inoffset;	
	vec4 result = log2(v0)/log2(e);
	gl_FragColor = (result*outscale)+outoffset;
}
	else if(op==17)
{
	vec4 v0 = texture2DRect(texture, texcoord0);
	
	v0 = (v0*inscale)+inoffset;	
	vec4 result = log2(v0);
	gl_FragColor = (result*outscale)+outoffset;
}
	else if(op==18)
{
	vec4 v0 = texture2DRect(texture, texcoord0);

	v0 = (v0*inscale)+inoffset;	
	vec4 result = log2(v0)/log2(vec4(10.));
	gl_FragColor = (result*outscale)+outoffset;
}
	else if(op==19)
{
	vec4 v0 = texture2DRect(texture, texcoord0);
	
	v0 = (v0*inscale)+inoffset;	
	vec4 result = (cos(v0*6.2831853)+1.)*0.5;
	gl_FragColor = (result*outscale)+outoffset;
}
	else if(op==20)
{
	vec4 v0 = texture2DRect(texture, texcoord0);
	
	v0 = (v0*inscale)+inoffset;	
	vec4 result = (sin(v0*6.2831853)+1.)*0.5;
	gl_FragColor = (result*outscale)+outoffset;
}
	else if(op==21)
{
	vec4 v0 = texture2DRect(texture, texcoord0);
	
	v0 = (v0*inscale)+inoffset;	
	vec4 result = vec4(equal(v0,vec4(0.)));
	gl_FragColor = (result*outscale)+outoffset;
}
	else if(op==22)
{
	vec4 v0 = texture2DRect(texture, texcoord0);
	
	v0 = (v0*inscale)+inoffset;	
	vec4 result = sign(v0);
	gl_FragColor = (result*outscale)+outoffset;
}
	else if(op==23)
{
	vec4 v0 = texture2DRect(texture, texcoord0);
	
	v0 = (v0*inscale)+inoffset;	
	vec4 result = sin(v0);
	gl_FragColor = (result*outscale)+outoffset;
}
	else if(op==24)
{
	vec4 v0 = texture2DRect(texture, texcoord0);
	vec4 e = vec4(2.71828182846);

	v0 = (v0*inscale)+inoffset;	
	vec4 result = (pow(e,v0) - pow(e,-v0))/vec4(2.);
	gl_FragColor = (result*outscale)+outoffset;
}
	else if(op==25)
{
	vec4 v0 = texture2DRect(texture, texcoord0);
	
	v0 = (v0*inscale)+inoffset;	
	vec4 result = sqrt(v0);
	gl_FragColor = (result*outscale)+outoffset;
}
	else if(op==26)
{
	vec4 v0 = texture2DRect(texture, texcoord0);
	
	v0 = (v0*inscale)+inoffset;	
	vec4 result = tan(v0);
	gl_FragColor = (result*outscale)+outoffset;
}
	else if(op==27)
{
	vec4 v0 = texture2DRect(texture, texcoord0);
	vec4 e = vec4(2.71828182846);
	vec4 ex,enx;

	v0 = (v0*inscale)+inoffset;	
	ex = pow(e,v0);
	enx = pow(e,-v0);
	vec4 result = (ex - enx)/(ex + enx);
	gl_FragColor = (result*outscale)+outoffset;

}
	else if(op==28)
{
	vec4 v0 = texture2DRect(texture, texcoord0);
	
	v0 = (v0*inscale)+inoffset;	
	vec4 result = 1. - v0;
	gl_FragColor = (result*outscale)+outoffset;
}

	else
{
	vec4 v0 = texture2DRect(texture, texcoord0);
	gl_FragColor = (v0);
}
	
}