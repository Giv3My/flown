import type { FC } from 'react'
import { Button, Input } from 'components'

export const UIComponents: FC = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col items-center gap-y-2">
        <p className="text-2xl font-bold text-text-title">Buttons</p>
        <div className="flex gap-x-5">
          <div className="flex flex-col items-center gap-y-1">
            <p className="text-xl text-text-title">Primary Button</p>
            <div className="flex items-center gap-x-5">
              <div className="flex flex-col items-center gap-y-1">
                <p className="text-base text-text-title">Large</p>
                <p className="text-sm text-text-title">Enabled</p>
                <Button size="lg"> Button</Button>
                <p className="text-sm text-text-title">Hovered</p>
                <Button size="lg"> Button</Button>
                <p className="text-sm text-text-title">Focused</p>
                <Button size="lg"> Button</Button>
                <p className="text-sm text-text-title">Disabled</p>
                <Button size="lg" disabled>
                  Button
                </Button>
              </div>
              <div className="flex flex-col items-center gap-y-1">
                <p className="text-base text-text-title">Medium</p>
                <p className="text-sm text-text-title">Enabled</p>
                <Button> Button</Button>
                <p className="text-sm text-text-title">Hovered</p>
                <Button> Button</Button>
                <p className="text-sm text-text-title">Focused</p>
                <Button> Button</Button>
                <p className="text-sm text-text-title">Disabled</p>
                <Button disabled> Button</Button>
              </div>
              <div className="flex flex-col items-center gap-y-1">
                <p className="text-base text-text-title">Small</p>
                <p className="text-sm text-text-title">Enabled</p>
                <Button size="sm"> Button</Button>
                <p className="text-sm text-text-title">Hovered</p>
                <Button size="sm"> Button</Button>
                <p className="text-sm text-text-title">Focused</p>
                <Button size="sm"> Button</Button>
                <p className="text-sm text-text-title">Disabled</p>
                <Button size="sm" disabled>
                  Button
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <p className="text-xl text-text-title">Outline Button</p>
            <div className="flex items-center gap-x-5">
              <div className="flex flex-col items-center gap-y-1">
                <p className="text-base text-text-title">Large</p>
                <p className="text-sm text-text-title">Enabled</p>
                <Button variant="outline" size="lg">
                  Button
                </Button>
                <p className="text-sm text-text-title">Hovered</p>
                <Button variant="outline" size="lg">
                  Button
                </Button>
                <p className="text-sm text-text-title">Focused</p>
                <Button variant="outline" size="lg">
                  Button
                </Button>
                <p className="text-sm text-text-title">Disabled</p>
                <Button variant="outline" size="lg" disabled>
                  Button
                </Button>
              </div>
              <div className="flex flex-col items-center gap-y-1">
                <p className="text-base text-text-title">Medium</p>
                <p className="text-sm text-text-title">Enabled</p>
                <Button variant="outline"> Button</Button>
                <p className="text-sm text-text-title">Hovered</p>
                <Button variant="outline"> Button</Button>
                <p className="text-sm text-text-title">Focused</p>
                <Button variant="outline"> Button</Button>
                <p className="text-sm text-text-title">Disabled</p>
                <Button variant="outline" disabled>
                  Button
                </Button>
              </div>
              <div className="flex flex-col items-center gap-y-1">
                <p className="text-base text-text-title">Small</p>
                <p className="text-sm text-text-title">Enabled</p>
                <Button variant="outline" size="sm">
                  Button
                </Button>
                <p className="text-sm text-text-title">Hovered</p>
                <Button variant="outline" size="sm">
                  Button
                </Button>
                <p className="text-sm text-text-title">Focused</p>
                <Button variant="outline" size="sm">
                  Button
                </Button>
                <p className="text-sm text-text-title">Disabled</p>
                <Button variant="outline" size="sm" disabled>
                  Button
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <p className="text-2xl font-bold text-text-title">Inputs</p>
        <div className="flex gap-x-5 items-center justify-center">
          <div className="flex flex-col items-center gap-y-1">
            <p className="text-sm text-text-title">Enabled</p>
            <Input placeholder="Placeholder" />
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <p className="text-sm text-text-title">Hovered</p>
            <Input placeholder="Placeholder" />
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <p className="text-sm text-text-title">Focused</p>
            <Input placeholder="Placeholder" />
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <p className="text-sm text-text-title">Disabled</p>
            <Input placeholder="Placeholder" disabled />
          </div>
        </div>
      </div>
    </div>
  )
}
