import { Route, Switch } from "react-router-dom";
import DrawPanel from "./panels/draw/draw-panel";
import ImageSetting from "./panels/image/image-setting";
import ImagePanel from "./panels/imagePanel";
import PanelTextEdit from "./panels/text/panel-text-edit";
import TextPanel from "./panels/textPanel";

export default function AppRouter() {
    return (
        <Switch>
            <Route exact path="/draw">
                <DrawPanel />
            </Route>
            <Route exact path="/image/setting">
                <ImageSetting />
            </Route>
            <Route exact path="/text/edit">
                <PanelTextEdit />
            </Route>
            <Route exact path="/text">
                <TextPanel />
            </Route>
            <Route exact path="/">
                <ImagePanel />
            </Route>
        </Switch>
    )
}