(() => {
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

  type NetworkState =
    | NetworkLoadingState
    | NetworkFailedState
    | NetworkSuccessState;


  const logger = (state: NetworkState): string =>  {
    
    // state.code; // NetworkLoadingState　と NetworkSuccessStateはcodeを持たないのでエラー
    switch (state.state) {
      case 'loading':
        return 'Downloading...';

      case 'failed':
        // stateが 'failed' のときはNetworkFailedStateと識別できるのでエラーにならない
        return `Error ${state.code} downloading`;

      case 'success':
        return `Downloaded ${state.response.title} - ${state.response.summary}`;
    }
  }
})();