import { FC } from 'react';
import { Result, Button } from 'antd';
import { Route, useNavigate } from 'react-router-dom';
import { RouteProps, useLocation } from 'react-router';

const PrivateRoute: FC<RouteProps> = props => {
  const { logged } = { logged: false };
  const navigate = useNavigate();
  const location = useLocation();

  return logged ? (
    <Route {...props} />
  ) : (
    <Result
      status="403"
      title="403"
      extra={
        <Button
          type="primary"
          onClick={() => navigate(`/login${'?from=' + encodeURIComponent(location.pathname)}`, { replace: true })}
        ></Button>
      }
    />
  );
};

export default PrivateRoute;
