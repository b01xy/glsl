uniform sampler2DRect tex;

varying vec2 texcoord0;


vec2 TexelKernel[13];
float BlurWeights[13];

uniform float blur;
uniform float gain;

void main()
{	

	
	
	TexelKernel[0] = vec2(0, -6);
	TexelKernel[1] = vec2(0, -5);
	TexelKernel[2] = vec2(0, -4);
	TexelKernel[3] = vec2(0, -3);
	TexelKernel[4] = vec2(0, -2);
	TexelKernel[5] = vec2(0, -1);
	TexelKernel[6] = vec2(0, 0);
	TexelKernel[7] = vec2(0, 1);
	TexelKernel[8] = vec2(0, 2);
	TexelKernel[9] = vec2(0, 3);
	TexelKernel[10] = vec2(0, 4);
	TexelKernel[11] = vec2(0, 5);
	TexelKernel[12] = vec2(0, 6);

	BlurWeights[0] = 0.002216;
   	BlurWeights[1] =     0.008764;
	BlurWeights[2] =     0.026995;
	BlurWeights[3] =     0.064759;
	BlurWeights[4] =     0.120985;
	BlurWeights[5] =     0.176033;
	BlurWeights[6] =     0.199471;
	BlurWeights[7] =     0.176033;
	BlurWeights[8] =     0.120985;
	BlurWeights[9] =     0.064759;
	BlurWeights[10] =     0.026995;
	BlurWeights[11] =     0.008764;
	BlurWeights[12] =     0.002216;
	
	vec4 color = vec4(0.0, 0.0, 0.0, 0.0);
	
	for (int i = 0; i<13; i++)
	{	
		color += texture2DRect(tex, texcoord0 + TexelKernel[i] / blur ) * BlurWeights[i];
	}	
	
	gl_FragColor = color * gain;
	
} 
