export const UserSignInOutAuthCheck = async ({ req }: any) => {
  const token = req?.cookies["token"];
  const path = req?.url;

  const privateRoutes = [
    path.includes("welcome"),
    path.includes("pre-question"),
    path.includes("main-question"),
    path.includes("recommendations"),
    path.includes("checklist"),
  ];

  const publicRoutes = [path.includes("login"), path.includes("register")];

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
        destination: "/welcome",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
