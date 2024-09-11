import React from 'react';
import { Layout, theme, ConfigProvider} from 'antd';
import MyFooter from "./components/MyFooter.jsx";
import MyHeader from "./components/MyHeader.jsx";
import MyContent from "./components/MyContent.jsx";

const App = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <ConfigProvider
            theme={{
                token: {
                    // Seed Token，影响范围大
                    colorPrimary: '#FECE14',
                    borderRadius: 2,

                    // 派生变量，影响范围小
                    colorBgContainer: '#ffffff',
                },
            }}
        >
            <Layout>
                <MyHeader/>
                <MyContent colorBgContainer={colorBgContainer} borderRadiusLG={borderRadiusLG}/>
                <MyFooter/>

            </Layout>
        </ConfigProvider>
    );
};
export default App;