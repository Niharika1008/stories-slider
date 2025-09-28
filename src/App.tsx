import { Header } from "@app/components/Header";
import { Stories } from "@app/containers/Stories";
import { ContentMedia } from "@app/containers/ContentMedia";
import { AppContext } from "@app/contexts";
import { getInitialState } from "@app/services/getInitialState";
import { useReducer } from "react";
import { reducerFn } from "@app/reducers";
import { Portal } from "@app/portals";
import { StoryPortal } from "@app/portals/StoryPortal";
import { IAppContext, IPayload } from "@app/contexts/types.interface";

function App() {
  const [state, dispatch] = useReducer<React.Reducer<IAppContext, IPayload>>(
    reducerFn,
    getInitialState()
  );

  const globalState: IAppContext = {
    ...state,
    dispatch
  };

  return (
    <AppContext.Provider value={globalState}>
      <div className="App flex flex-col min-h-screen w-full bg-black">
        {/* Main content */}
        <section className="w-full max-w-[900px] mx-auto flex-1">
          <Header />
          <Stories />
          <ContentMedia />
        </section>

        {/* Portals */}
        <Portal>
          <StoryPortal />
        </Portal>
      </div>
    </AppContext.Provider>
  );
}

export default App;
