import {Children, createContext, useContext} from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Container from "../components/container";
import EnvironmentDisplay from "../components/EnvironmentDisplay";
import AppSlugForm from "../components/AppSlugForm";

type AppSlugContextType = {
  appSlug: string;
  setAppSlug: any;
  resetAppSlug: any;
}

const AppSlugContext = createContext<AppSlugContextType | undefined>(undefined)

const AppSlugProvider = ({children}) => {
  const [appSlug, setAppSlug] = useLocalStorage<string>('appSlug')

  const resetAppSlug = () => {
    setAppSlug(undefined)
    window.location.reload()
  }

  if (appSlug === 'undefined' || !appSlug) {
    return (
        <Container>
          <EnvironmentDisplay/>
          <AppSlugForm setAppSlug={setAppSlug}/>
        </Container>
    )
  }

  return (
      <AppSlugContext.Provider value={{
        appSlug,
        setAppSlug,
        resetAppSlug
      }}>
        {Children.only(children(appSlug))}
      </AppSlugContext.Provider>
  )
}

export const useAppSlugContext = () => useContext(AppSlugContext)


export default AppSlugProvider
