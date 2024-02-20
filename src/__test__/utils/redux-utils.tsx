import { setUpStore } from "../../redux/store";
import { Provider } from "react-redux";
import { AppStore, RootState } from "../../redux/store";
import { render, RenderOptions } from "@testing-library/react";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export const renderWithProvider = (
  component: React.ReactElement,
  {
    preloadedState = {},
    store = setUpStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const _provider = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return {
    store,
    ...render(component, { wrapper: _provider, ...renderOptions }),
  };
};

export const key = "67b3f85d-5354-4bd6-ba9a-5482fb966057";
export const preloadedState: RootState = {
  cats: {
    "67b3f85d-5354-4bd6-ba9a-5482fb966057": {
      id: "67b3f85d-5354-4bd6-ba9a-5482fb966057",
      url: "https://cdn2.thecatapi.com/images/2n3.jpg",
      isLiked: false,
    },
  },
};
