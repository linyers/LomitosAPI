import { useContext, useEffect } from "react";
import PathsContext from "../context/PathsContext";
import ApiEndpoint from "../components/ApiEndpoint";

function AuthPage() {
  const { setPageNav } = useContext(PathsContext);

  const nav = [
    {
      id: "#create-user",
      name: "Create user",
    },
    {
      id: "#confirm-email",
      name: "Confirm email",
    },
    {
      id: "#change-password",
      name: "Change password",
    },
    {
      id: "#get-tokens",
      name: "Get tokens",
    },
    {
      id: "#access-token",
      name: "Access token",
    },
    {
      id: "#refresh-token",
      name: "Refresh token",
    },
  ];

  useEffect(() => {
    setPageNav(nav);
  }, []);

  return (
    <>
      <h2 className="font-bold text-6xl mb-10">Authentication</h2>
      <p className="text-xl font-bold mb-16">
        Para poder crear, actualizar y eliminar lomitos debes estar autenticado.
        En este apartado se vera como crear un usuario y poder autenticarlo.
      </p>

      <section className="flex flex-col gap-10">
        <ApiEndpoint
          id="create-user"
          title="Create user"
          description={
            "Para poder crear un usuario se debe ingresar un email valido, contraseña y confirmar contraseña en el siguiente endpoint: "
          }
          endpoint="/auth/signup/"
          request={`[POST] https://lomitosapi.com.ar/api/auth/signup/
# Body
{
  "email": "linyers@example.com",
  "password": "123456asdfg",
  "repeat_password": "123456asdfg"
}`}
          response={`{
  "id": "95e78fa5-2eca-4fba-98d1-3508926e2f69",
  "email": "linyers@example.com"
}`}
          note="Luego de haber creado el usuario te llegara un mail de confirmacion. Chequea la bandeja de spam."
        />

        <ApiEndpoint
          id="confirm-email"
          title="Confirm email"
          description={
            "Para validar nuestro email debemos ir al link que se nos envio a nuestro email. Chequea la bandeja de spam."
          }
          request={`[GET] https://lomitosapi.com.ar/api/auth/activate/...`}
          response={`{
  "Success": "Thank you for your email confirmation. Now you can login your account."
}`}
        />

        <div>
          <ApiEndpoint
            id="change-password"
            title="Change password"
            description={
              "Para cambiar nuestra contraseña debemos ingresar nuestro email en el siguiente endpoint: "
            }
            endpoint="/auth/change-password/"
            request={`[POST] https://lomitosapi.com.ar/api/auth/change-password/`}
            response={`{
  "Success": "Check your email to change your password!"
}`}
          />
          <ApiEndpoint
            description={
              "Luego debemos chequear nuestro email porque nos llegara un mail con un link para poder cambiar nuestra contraseña. Aqui debemos ingresar nuestra nueva contraseña y repetirla."
            }
            request={`[POST] https://lomitosapi.com.ar/api/auth/change-password/...
#Body
{
  "new_password": "lomitos666sapee",
  "repeat_new_password": "lomitos666sapee"
}`}
            response={`{
  "Success": "Password changed!. Now you can login your account."
}`}
            note="Luego de enviado el mail para confirmar su cambio de contraseña, tiene 30 minutos para cambiar su contraseña con el link que se le fue enviado en el mail, sino debera volver a mandar el mail."
          />
        </div>

        <ApiEndpoint
          id="get-tokens"
          title="Get tokens"
          description={
            "Luego de haber creado nuestro usuario y validar su email nos toca autenticarnos y poder obtener nuestros tokens. Para eso ve al siguiente endpoint: "
          }
          endpoint="/auth/login/"
          request={`[POST] https://lomitosapi.com.ar/api/auth/login/
# Body
{
  "email": "linyers@example.com",
  "password": "lomitos666sapee"
}`}
          response={`{
  "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5NDY0MDA2NCwiaWF0IjoxNjk0NjAwNDY0LCJqdGkiOiJkMTYwOGE4Zjk1NTc0ODdlODg2ODZiODBlZGY0Mjk4ZCIsInVzZXJfaWQiOiI0M2I5MTdjOS1kNTQ3LTRjY2UtOTY0Yy05OGIzY2U3ZjZiNjciLCJlbWFpbCI6ImhlbG93MTI3MjBAc2VzeGUuY29tIn0.C5cL5HcjgJBUCRJwpa8VCTNKeKpzsaxicYaHC8o2B3U",
  "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk2MzI4NDY0LCJpYXQiOjE2OTQ2MDA0NjQsImp0aSI6IjYzZmUyNTI2ZTcyMzQyOGJiYjhlMjcxZTQyMjQzMDRlIiwidXNlcl9pZCI6IjQzYjkxN2M5LWQ1NDctNGNjZS05NjRjLTk4YjNjZTdmNmI2NyIsImVtYWlsIjoiaGVsb3cxMjcyMEBzZXN4ZS5jb20ifQ.ulZ4c7B-sLnO5g1bOz24KdCHPZcvLk5M1VCz90_dDzo"
}`}
        />

        <ApiEndpoint
          id="access-token"
          title="Access token"
          description={
            "Ya que tenemos nuestro access token podemos hacer todas las operaciones CRUD. Ahora podemos ver nuestra cuenta, para esto ve al siguiente endpoint: "
          }
          endpoint="/auth/user/"
          request={`[GET] https://lomitosapi.com.ar/api/auth/user/
# Headers
{
  "Authorization": "Bearer {your access token}"
}`}
          response={`{
  "id": "43b917c9-d547-4cce-964c-98b3ce7f6b67",
  "email": "linyers@example.com",
  "created_at": "2023-09-13T09:37:31.522691Z"
}`}
        />

        <ApiEndpoint
          id="refresh-token"
          title="Refresh token"
          endpoint="/auth/token/refresh/"
          description={
            "Para obtener un nuevo access token podemos usar el refresh token ingresandolo al siguiente endpoint: "
          }
          request={`[POST] https://lomitosapi.com.ar/api/auth/token/refresh/
# Body
{
  "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5NDY0MDA2NCwiaWF0IjoxNjk0NjAwNDY0LCJqdGkiOiJkMTYwOGE4Zjk1NTc0ODdlODg2ODZiODBlZGY0Mjk4ZCIsInVzZXJfaWQiOiI0M2I5MTdjOS1kNTQ3LTRjY2UtOTY0Yy05OGIzY2U3ZjZiNjciLCJlbWFpbCI6ImhlbG93MTI3MjBAc2VzeGUuY29tIn0.C5cL5HcjgJBUCRJwpa8VCTNKeKpzsaxicYaHC8o2B3U"
}`}
          response={`{
  "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk2MzI5MDY5LCJpYXQiOjE2OTQ2MDA0NjQsImp0aSI6IjFlYjRmZDgzMzYwYTQzN2M4ZGJjMjBiYzAzYTdmYTA1IiwidXNlcl9pZCI6IjQzYjkxN2M5LWQ1NDctNGNjZS05NjRjLTk4YjNjZTdmNmI2NyIsImVtYWlsIjoiaGVsb3cxMjcyMEBzZXN4ZS5jb20ifQ.LBvF_XyUE8BwaqEhgVPjVZ7zsq9SIOOoIhbvoFxafDE"
}`}
          note="El access token es valido por 25 dias y el refresh token por 1 dia."
        />
      </section>
    </>
  );
}

export default AuthPage;
