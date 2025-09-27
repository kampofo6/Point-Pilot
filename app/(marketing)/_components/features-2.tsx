import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { NotebookPen, Database, Zap } from 'lucide-react'
import { ReactNode } from 'react'
import { CreditCard } from 'lucide-react';


export default function Features() {
    return (
        <section className="py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Built to maximize your rewards</h2>
                    
                    <p className="mt-4">Everything you need to optimize your credit card strategy and never miss out on rewards again</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 [--color-background:var(--color-muted)] [--color-card:var(--color-muted)] *:text-center md:mt-16 dark:[--color-muted:var(--color-zinc-900)]">
                    <Card className="group border-0 shadow-none">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <CreditCard 
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Right Card, Every Time</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Our AI analyzes each purchase category and recommends which card from your wallet will earn you the most points, cashback, or miles in real-time.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-none">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <NotebookPen
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Track Everything, Effortlessly</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Monitor points across all your cards in one dashboard. Track welcome bonuses, spending requirements, and expiry dates without the spreadsheets.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-none">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Database
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Data-Driven Optimization</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Get personalized recommendations for new cards that complement your spending habits and maximize your earning potential.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
            
        />



        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
