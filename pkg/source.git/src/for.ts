private function a() {
    if (this.length() > 1) {
        this.setContent = (value) => {
            this.clear().sendKeys(value);
        };
    }
}