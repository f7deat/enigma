import { Route, Switch } from "react-router-dom";
import { DrawPanel, ImagePanel, ShapePanel, TextPanel } from "./panels";
import ImageSetting from "./panels/image/image-setting";
import PanelTextEdit from "./panels/text/panel-text-edit";

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
            <Route exact path="/shape">
                <ShapePanel />
            </Route>
            <Route exact path="/">
                <ImagePanel />
            </Route>
        </Switch>
    )
}