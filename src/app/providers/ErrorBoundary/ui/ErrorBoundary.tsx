import React, { ErrorInfo, Suspense } from 'react';

import { ErrorPage } from 'pages/Error';
import { PageLoader } from 'widgets/PageLoader';

interface IProps {
    children: React.ReactNode
}

interface IState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // сервис для логирования
        console.log(error, errorInfo);
    }

    render() {
        const { children } = this.props;
        const { hasError } = this.state;
        if (hasError) {
            return (
                <Suspense fallback={<PageLoader />}>
                    <ErrorPage />
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
