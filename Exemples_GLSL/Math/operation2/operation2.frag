
varying vec2 texcoord0;
varying vec2 texcoord1;

uniform int op;
uniform vec4 inscale;
uniform vec4 inoffset;
uniform vec4 in2scale;
uniform vec4 in2offset;
uniform vec4 outscale;
uniform vec4 outoffset;

uniform sampler2DRect tex0;
uniform sampler2DRect tex1;

void main( void )
{
	if (op==1)
{
	vec4 v0 = texture2DRect(tex0, texcoord0);
	vec4 v1 = texture2DRect(tex1, texcoord1);
	
	v0 = (v0*inscale)+inoffset;	
	v1 = (v1*in2scale)+in2offset;	
	vec4 result = abs(v0 - v1);
	gl_FragColor = (result*outscale)+outoffset;
}
	else if (op==2)
{
	vec4 v0 = texture2DRect(tex0, texcoord0);
	vec4 v1 = texture2DRect(tex1, texcoord1);
	
	v0 = (v0*inscale)+inoffset;	
	v1 = (v1*in2scale)+in2offset;	
	vec4 result = v0 + v1;
	gl_FragColor = (result*outscale)+outoffset;
}
	else if (op==3)
{
	vec4 v0 = texture2DRect(tex0, texcoord0);
	vec4 v1 = texture2DRect(tex1, texcoord1);
	vec4 zero = vec4(0.);
	vec4 two = vec4(1.5); //fudge to deal with any potential fp precision error
	vec4 logicalsum;

	v0 = (v0*inscale)+inoffset;	
	v1 = (v1*in2scale)+in2offset;	
	
	// since there isn't a GLSL conformant vector logical and, 
	// implement using vector functions to see if not zero and sum == 2
	logicalsum = vec4(notEqual(v0,zero))+vec4(notEqual(v1,zero)); 
	vec4 result = vec4(greaterThanEqual(logicalsum,two));
	gl_FragColor = (result*outscale)+outoffset;
}
	else if (op==4)
{
	vec4 v0 = texture2DRect(tex0, texcoord0);
	vec4 v1 = texture2DRect(tex1, texcoord1);
	
	v0 = (v0*inscale)+inoffset;	
	v1 = (v1*in2scale)+in2offset;	
	vec4 result = atan(v0,v1);
	gl_FragColor = (result*outscale)+outoffset;
}
	else if (op==5)
{
	vec4 v0 = texture2DRect(tex0, texcoord0);
	vec4 v1 = texture2DRect(tex1, texcoord1);
	
	v0 = (v0*inscale)+inoffset;	
	v1 = (v1*in2scale)+in2offset;	
	vec4 result = (v0 + v1) * 0.5;
	gl_FragColor = (result*outscale)+outoffset;
}
	else if (op==6)
{
	vec4 v0 = texture2DRect(tex0, texcoord0);
	vec4 v1 = texture2DRect(tex1, texcoord1);
	
	v0 = (v0*inscale)+inoffset;	
	v1 = (v1*in2scale)+in2offset;	
	vec4 result = v0 / v1;
	gl_FragColor = (result*outscale)+outoffset;
}
	else if (op==7)
{
	vec4 v0 = texture2DRect(tex0, texcoord0);
	vec4 v1 = texture2DRect(tex1, texcoord1);
	
	v0 = (v0*inscale)+inoffset;	
	v1 = (v1*in2scale)+in2offset;	
	vec4 result = vec4(v0 == v1);
	gl_FragColor = (result*outscale)+outoffset;
}
	else if (op==8)
{
	vec4 v0 = texture2DRect(tex0, texcoord0);
	vec4 v1 = texture2DRect(tex1, texcoord1);
	
	v0 = (v0*inscale)+inoffset;	
	v1 = (v1*in2scale)+in2offset;	
	vec4 result = vec4(v0 == v1) * v0;
	gl_FragColor = (result*outscale)+outoffset;
}
	else if (op==9)
{
	vec4 v0 = texture2DRect(tex0, texcoord0);
	vec4 v1 = texture2DRect(tex1, texcoord1);
	
	v0 = (v0*inscale)+inoffset;	
	v1 = (v1*in2scale)+in2offset;	
	vec4 result = vec4(greaterThan(v0,v1));
	gl_FragColor = (result*outscale)+outoffset;
}
	else if (op==10)
{
	vec4 v0 = texture2DRect(tex0, texcoord0);
	vec4 v1 = texture2DRect(tex1, texcoord1);
	
	v0 = (v0*inscale)+inoffset;	
	v1 = (v1*in2scale)+in2offset;	
	vec4 result = vec4(greaterThanEqual(v0,v1));
	gl_FragColor = (result*outscale)+outoffset;
}
	else if (op==11)
{
	vec4 v0 = texture2DRect(tex0, texcoord0);
	vec4 v1 = texture2DRect(tex1, texcoord1);
	
	v0 = (v0*inscale)+inoffset;	
	v1 = (v1*in2scale)+in2offset;	
	vec4 result = vec4(greaterThanEqual(v0,v1)) * v0;
	gl_FragColor = (result*outscale)+outoffset;
}
	else if (op==12)
{
	vec4 v0 = texture2DRect(tex0, texcoord0);
	vec4 v1 = texture2DRect(tex1, texcoord1);
	
	v0 = (v0*inscale)+inoffset;	
	v1 = (v1*in2scale)+in2offset;	
	vec4 result = vec4(greaterThan(v0,v1)) * v0;
	gl_FragColor = (result*outscale)+outoffset;
}
	else if (op==13)
{
	vec4 v0 = texture2DRect(tex0, texcoord0);
	vec4 v1 = texture2DRect(tex1, texcoord1);
	
	v0 = (v0*inscale)+inoffset;	
	v1 = (v1*in2scale)+in2offset;	
	vec4 result = sqrt((v0*v0)+(v1*v1));
	gl_FragColor = (result*outscale)+outoffset;
}
	else if (op==14)
{
	vec4 v0 = texture2DRect(tex0, texcoord0);
	vec4 v1 = texture2DRect(tex1, texcoord1);
	
	v0 = (v0*inscale)+inoffset;	
	v1 = (v1*in2scale)+in2offset;	
	vec4 result = vec4(lessThan(v0,v1));
	gl_FragColor = (result*outscale)+outoffset;
}
	else if (op==16)
{
	vec4 v0 = texture2DRect(tex0, texcoord0);
	vec4 v1 = texture2DRect(tex1, texcoord1);
	
	v0 = (v0*inscale)+inoffset;	
	v1 = (v1*in2scale)+in2offset;	
	vec4 result = vec4(lessThanEqual(v0,v1));
	gl_FragColor = (result*outscale)+outoffset;
}
	else if (op==17)
{
	vec4 v0 = texture2DRect(tex0, texcoord0);
	vec4 v1 = texture2DRect(tex1, texcoord1);
	
	v0 = (v0*inscale)+inoffset;	
	v1 = (v1*in2scale)+in2offset;	
	vec4 result = vec4(lessThanEqual(v0,v1)) * v0;
	gl_FragColor = (result*outscale)+outoffset;
}
	else if (op==18)
{
	vec4 v0 = texture2DRect(tex0, texcoord0);
	vec4 v1 = texture2DRect(tex1, texcoord1);
	
	v0 = (v0*inscale)+inoffset;	
	v1 = (v1*in2scale)+in2offset;	
	vec4 result = vec4(lessThan(v0,v1)) * v0;
	gl_FragColor = (result*outscale)+outoffset;
}
	else if (op==19)
{
	vec4 v0 = texture2DRect(tex0, texcoord0);
	vec4 v1 = texture2DRect(tex1, texcoord1);
	
	v0 = (v0*inscale)+inoffset;	
	v1 = (v1*in2scale)+in2offset;	
	vec4 result = max(v0,v1);
	gl_FragColor = (result*outscale)+outoffset;
}
	else if (op==20)
{
	vec4 v0 = texture2DRect(tex0, texcoord0);
	vec4 v1 = texture2DRect(tex1, texcoord1);
	
	v0 = (v0*inscale)+inoffset;	
	v1 = (v1*in2scale)+in2offset;	
	vec4 result = min(v0,v1);
	gl_FragColor = (result*outscale)+outoffset;
}
	else if (op==21)
{
	vec4 v0 = texture2DRect(tex0, texcoord0);
	vec4 v1 = texture2DRect(tex1, texcoord1);
	
	v0 = (v0*inscale)+inoffset;	
	v1 = (v1*in2scale)+in2offset;	
	vec4 result = mod(v0,v1);
	gl_FragColor = (result*outscale)+outoffset;
}
	else if (op==22)
{
	vec4 v0 = texture2DRect(tex0, texcoord0);
	vec4 v1 = texture2DRect(tex1, texcoord1);
	
	v0 = (v0*inscale)+inoffset;	
	v1 = (v1*in2scale)+in2offset;	
	vec4 result = v0 * v1;
	gl_FragColor = (result*outscale)+outoffset;
}
	else if (op==23)
{
	vec4 v0 = texture2DRect(tex0, texcoord0);
	vec4 v1 = texture2DRect(tex1, texcoord1);
	
	v0 = (v0*inscale)+inoffset;	
	v1 = (v1*in2scale)+in2offset;	
	vec4 result = vec4(v0 != v1);
	gl_FragColor = (result*outscale)+outoffset;
}
	else if (op==24)
{
	vec4 v0 = texture2DRect(tex0, texcoord0);
	vec4 v1 = texture2DRect(tex1, texcoord1);
	
	v0 = (v0*inscale)+inoffset;	
	v1 = (v1*in2scale)+in2offset;	
	vec4 result = vec4(v0 != v1) * v0;
	gl_FragColor = (result*outscale)+outoffset;
}
	else if (op==25)
{
	vec4 v0 = texture2DRect(tex0, texcoord0);
	vec4 v1 = texture2DRect(tex1, texcoord1);
	vec4 zero = vec4(0.);
	vec4 one = vec4(0.5); //fudge to deal with any potential fp precision error
	vec4 logicalsum;

	v0 = (v0*inscale)+inoffset;	
	v1 = (v1*in2scale)+in2offset;	
	
	// since there isn't a GLSL conformant vector logical or, 
	// implement using vector functions to see if not zero and sum == 1
	logicalsum = vec4(notEqual(v0,zero))+vec4(notEqual(v1,zero)); 
	vec4 result = vec4(greaterThanEqual(logicalsum,one));
	gl_FragColor = (result*outscale)+outoffset;
}
	else if (op==26)
{
	vec4 v0 = texture2DRect(tex0, texcoord0);
	vec4 v1 = texture2DRect(tex1, texcoord1);
	
	v0 = (v0*inscale)+inoffset;	
	v1 = (v1*in2scale)+in2offset;	
	vec4 result = pow(v0,v1);
	gl_FragColor = (result*outscale)+outoffset;
}
	else if (op==27)
{
	vec4 v0 = texture2DRect(tex0, texcoord0);
	vec4 v1 = texture2DRect(tex1, texcoord1);
	
	v0 = (v0*inscale)+inoffset;	
	v1 = (v1*in2scale)+in2offset;	
	vec4 result = v0 - v1;
	gl_FragColor = (result*outscale)+outoffset;
}
	else
{
	vec4 v0 = texture2DRect(tex0, texcoord0);
	vec4 v1 = texture2DRect(tex1, texcoord1);
	vec4 zero = vec4(0.);

	v0 = (v0*inscale)+inoffset;	
	v1 = (v1*in2scale)+in2offset;	
	
	// since there isn't a GLSL conformant vector logical xor, 
	// implement using vector functions to see if not zero and 
	// not equal to one another
	vec4 result = vec4(notEqual(notEqual(v0,zero),notEqual(v1,zero))); 
	gl_FragColor = (result*outscale)+outoffset;
}

}
