// vertex

const float SpecularForce = 0.3;
const float DiffuseForce = 1.0 - SpecularForce;

varying float IntensitéLumineuse;

void main() {
	vec3 positionVertMonde = vec3(gl_ModelViewMatrix*gl_Vertex);
	vec3 normale = normalize(gl_NormalMatrix*gl_Normal);
	vec3 lumiereVec = normalize (gl_LightSource[0].position - positionVertMonde);
	vec3 reflection = reflect(-lumiereVec, normale);
	vec3 oeil = normalize(-positionVertMonde);
	float lumDiffuse = max(dot(lumiereVec, normale), 0.0);
	float lumSpec = max(dot(oeil,réflecion), 0.0);

	IntensiteLumineuse = lumDiffuse*DiffuseForce + lumSpec * SpecularForce;
	gl_Position = ftransform();
}



// gl_Vertex coordonnées de l'objet
// gl_ModelViewMatrix : où il est place dans le monde
// Normaliser : on est sur que les tailles des vecteurs seront =< à 1
// produit scalaire : maximal quand les vecteurs sont parallèle angle 0 cosinus à 1
// gl_LightSource[0] : la première source de lumière dans Pure Data
// position donne un vec3
// Réflexion spéculaire : le rayon incident donne naissance à un rayon réfléchi unique à contrario de la lumière diffuse
// dot : produit scalaire
