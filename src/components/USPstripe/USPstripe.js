"use client";

import { useState, useEffect } from 'react';
import styles from './USPstripe.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function USPstripe() {



    const slides = [
        { title: "Remove newspaper articles", icon: "✓" },
        { title: "Remove negative/fake reviews", icon: "✓" },
        { title: "Negative link burial", icon: "✓" },
        { title: "Google auto suggest removal", icon: "✓" },
        { title: "Remove negative Links/URL", icon: "✓" },
    ];

    return (
        <section>
            <div className={`container-fluid ${styles.bg}`}>
                <div className={`row`}>
                    <div className="col">
                        {(
                            <div className={styles.marqueeContent}>
                                {slides.map((feature, idx) => (
                                    <div key={idx + feature.title} className={styles.featureItem}>
                                        <span className={styles.featureIcon}>{feature.icon}</span>
                                        {feature.title}
                                    </div>
                                ))}
                            </div>

                        )}
                    </div>
                </div>
            </div>

        </section>
    )
}