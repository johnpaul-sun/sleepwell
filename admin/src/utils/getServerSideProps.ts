export const AdminSignInOutAuthCheck = async ({ req }: any) => {
  const token = req?.cookies["token"];
  const path = req?.url;

  const privateRoutes = [path.includes("/dashboard"), path.includes("/manage-user")]; 
  const publicRoutes = [path == "/"];

  if (publicRoutes.includes(true) && !token) return { props: {} };

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  if (privateRoutes.includes(true) && !token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  if (publicRoutes.includes(true) && token) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
