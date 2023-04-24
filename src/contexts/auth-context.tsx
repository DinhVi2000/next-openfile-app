import CreateCollection from "@/components/modal/CreateCollection";
import { path } from "@/utils/$path";
import { MODAL_NAME } from "@/utils/constants";
import { sleep } from "@/utils/helper";
import { http } from "@/utils/http";
import { useRouter } from "next/router";
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
  useEffect,
} from "react";

const AuthContext: any = createContext(null);

const Modal: any = {
  CREATE_COLLECTION: <CreateCollection />,
  NONE: null,
};

export const useAuthContext = () => {
  const authContext: any = useContext(AuthContext);
  if (!authContext) {
    throw new Error(
      "useWeb3Context() can only be used inside of <Web3ContextProvider />, " +
        "please declare it at a higher level."
    );
  }
  const { authProvider } = authContext;
  return useMemo(() => ({ ...authProvider }), [authContext]);
};

export const AuthContextProvider = ({ children }: any) => {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState();
  console.log("userInfo :", userInfo);

  const loginWithEmail = (formData: any) => {
    http
      .post("/auth/login", formData)
      .then(({ data }: any) => {
        setUserInfo(data?.user);
        router.push(path.static.home);
      })
      .catch((e: any) => console.log("e :", e));
  };

  const authProvider = useMemo(
    () => ({ userInfo, setUserInfo, loginWithEmail }),
    [userInfo, setUserInfo]
  );

  return (
    <AuthContext.Provider value={{ authProvider }}>
      {children}
    </AuthContext.Provider>
  );
};
