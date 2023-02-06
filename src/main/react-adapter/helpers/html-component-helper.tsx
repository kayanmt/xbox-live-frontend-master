type ParamType = {
  component: string;
};

export function HtmlComponent(params: ParamType) {
  return <div dangerouslySetInnerHTML={{ __html: params.component }} />;
}
