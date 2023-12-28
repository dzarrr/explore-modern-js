import { Helmet } from '@modern-js/runtime/head';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import Upload from '../../shared/components/Upload';

import './index.css';

const Index = () => {
  return (
    <div className="container-box">
      <Helmet>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
        />
      </Helmet>
      <main>
        <Typography variant="h3" gutterBottom>
          Add Watermark to Photo
        </Typography>
        <Upload />
      </main>
    </div>
  );
};

export default Index;
