export const middleware = async () => {
  console.log("Hello middleware");
};

export const config = {
  matcher: ["/login", "/create-shop"],
};
