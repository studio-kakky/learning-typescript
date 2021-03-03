(() => {
  const assertNever = (x: never): never => {
    throw new Error("Unexpected object: " + x);
  }
  type NetworkLoadingState = {
    state: "loading";
  };

  // 独自のmember codeを持つ
  type NetworkFailedState = {
    state: "failed";
    code: number;
  };

  // 独自のmember responseを持つ
  type NetworkSuccessState = {
    state: "success";
    response: {
      title: string;
      duration: number;
      summary: string;
    };
  };

  type NetworkFromCachedState = {
    state: "from_cache";
    id: string;
    response: NetworkSuccessState["response"];
  };

  type NetworkState =
    | NetworkLoadingState
    | NetworkFailedState
    | NetworkSuccessState
    | NetworkFromCachedState;


  const logger = (state: NetworkState): string =>  {
    switch (state.state) {
      case 'loading':
        return 'Downloading...';

      case 'failed':
        // stateが 'failed' のときはNetworkFailedStateと識別できるのでエラーにならない
        return `Error ${state.code} downloading`;

      case 'success':
        return `Downloaded ${state.response.title} - ${state.response.summary}`;

      default:
        // defaultにはNetworkFromCachedStateがくることを識別している
        return assertNever(state)
    }
  }
})();