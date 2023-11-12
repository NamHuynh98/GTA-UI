import { useState } from "react";
import { ReactComponent as Spinner } from "../../assets/icons/spinner.svg";
import "./loading.scss";

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  const LoadingPage = (
    <div className="loading-page-container">
      <Spinner />
    </div>
  );

  return [isLoading ? LoadingPage : "", setIsLoading];
};
