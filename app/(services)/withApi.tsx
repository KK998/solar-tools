import { ApiProvider } from "./Provider";

const withApi = (
  Component: ({ children }: { children: React.ReactNode }) => JSX.Element
) => {
  const displayName = Component.name || "Component";

  const ComponentWithApi = (props: any) => {
    return (
      <ApiProvider>
        <Component {...props} />
      </ApiProvider>
    );
  };

  ComponentWithApi.displayName = `withApi(${displayName})`;

  return ComponentWithApi;
};

export { withApi };
